import IconPickerPopup from './IconPickerPopup'
import IEditor from './types/editor';
import materialIcons from '../_data/versions.json'

interface IIcons {
  [name: string]: number
}

export const iconPickerPopupType = (editor: IEditor) => {
  editor.on('load', () => {
    console.log('editor', editor.Canvas)
    const head = editor.Canvas.getDocument().head;
    head.insertAdjacentHTML('beforeend', `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`);
  });

  editor.Commands.add('open:icon-picker', {
    run() {
      console.log('add');
      const editorEl = editor.getEl();
      console.log('editor', editor)

      if (editorEl) {
        editorEl.insertAdjacentHTML('beforebegin', IconPickerPopup(editor));
        
        this.renderList(materialIcons);

        console.log('editorEl', editorEl)
        const closeEl = document.querySelectorAll('.googleIconPicker__close');
        console.log('closeEl', closeEl)
        const iconEls = document.querySelectorAll('.googleIconPicker__icon');
        const searcherEl = document.querySelector('.googleIconPicker__search');

        closeEl.forEach(el => {
          el.addEventListener('click', () => this.close());
        });
        
        iconEls.forEach(el => {
          el.addEventListener('click', () => this.iconSelect(el.innerHTML));
        });

        const selects = document.querySelectorAll<HTMLSelectElement>('.googleIconPicker__customization select');

        selects.forEach(select => {
          this.setSelectValue(select);

          select.addEventListener('change', event => {
            const target = event.target as HTMLSelectElement;
            this.setSelectValue(target)
          });
        });

        if (searcherEl) {
          searcherEl.addEventListener('keydown', (e) => this.searcher(e));
        }
      }
    },

    setSelectValue(target: HTMLSelectElement) {
      if (!target) return;

      const variableName = `--${target.name.toLowerCase()}`;
      document.documentElement.style.setProperty(
        variableName,
        target.value
      );
    },

    renderList(icons: IIcons) {
      const iconList = document.querySelector('.googleIconPicker__icons');

      if (iconList) {
        iconList.innerHTML = '';
        Object.keys(icons).forEach((icon) => {
          iconList.appendChild(this.renderIcon(icon));
        });
      }
    },

    create(tag: string) {return document.createElement(tag)},

    renderIcon(name: string) {
      const button = document.createElement('button');
      button.setAttribute('aria-haspopup', 'dialog');
      button.setAttribute('role', 'option');
      button.setAttribute('aria-label', 'Search Icon');
      button.setAttribute('aria-selected', 'false');
      button.classList.add('googleIconPicker__iconWrapper');

      const span1 = document.createElement('span');
      span1.classList.add('googleIconPicker__icon', 'material-symbols-outlined');
      span1.style.fontSize = '48px';
      span1.innerText = name;

      const span2 = document.createElement('span');
      span2.classList.add('googleIconPicker__iconName');
      span2.innerText = name.replaceAll('_', ' ');

      button.appendChild(span1);
      button.appendChild(span2);

      return button;
    },
    debounce(func: Function, delay: number) {
      let timerId: ReturnType<typeof setTimeout>;
      return function(this: any, ...args: any[]) {
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    searcher(e: Event) {
      const input = e.target as HTMLInputElement;
      
      const debouncedSearch = this.debounce(() => {
        const filter = input.value.trim().toLowerCase();

        console.log('filter', filter)
        const filteredIcons = Object.keys(materialIcons)
        .filter((key) => key.includes(filter))
        .reduce((cur, key) => { return Object.assign(cur, { [key]: materialIcons[key as keyof typeof materialIcons] })}, {});
        
        this.renderList(filteredIcons);

      }, 100);
      
      debouncedSearch();
    },
    iconSelect(icon: string) {
      if (!editor || !editor.getWrapper().view) return;

      const selectedComp = editor.getSelected();
  
      if (!selectedComp) return;
  
      const selectedEl = selectedComp.getEl();
      console.log('selectedEl', selectedEl);
  
      if (selectedEl) {
        selectedEl.innerHTML = icon;
        this.close();
      }
    },
    close() {
      console.log('stop')
      const picker = document.querySelector('.googleIconPicker');

      if (picker) {
        picker.remove();
      }
    },
  })
  
  editor.Commands.add('close:icon-picker', {
    run() {
      console.log('stop')
      const picker = document.querySelector('.googleIconPicker');

      if (picker) {
        picker.remove();
      }
    },
  })
};

export default iconPickerPopupType;
