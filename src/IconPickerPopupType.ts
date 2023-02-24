import IconPickerPopup from './IconPickerPopup'
import IEditor from './types/editor';

export const iconPickerPopupType = (editor: IEditor) => {
  editor.Commands.add('open:icon-picker', {
    run() {
      console.log('add');
      const editorEl = editor.getEl();
      console.log('editor', editor)

      if (editorEl) {
        editorEl.insertAdjacentHTML('beforebegin', IconPickerPopup(editor));
        
        console.log('editorEl', editorEl)
        const closeEl = document.querySelectorAll('.googleIconPicker__close');
        console.log('closeEl', closeEl)
        const iconEls = document.querySelectorAll('.googleIconPicker__icon');
        const searcherEl = document.querySelector('.googleIconPicker__searcher');

        closeEl.forEach(el => {
          el.addEventListener('click', () => this.close());
        });
        
        iconEls.forEach(el => {
          el.addEventListener('click', () => this.iconSelect(el.innerHTML));
        });

        if (searcherEl) {
          console.log('searcherEl', searcherEl);
          searcherEl.addEventListener('keydown', (e) => this.searcher(e));
        }
      }
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
      const iconEls = document.querySelectorAll(".googleIconPicker__iconWrapper") as NodeListOf<HTMLLIElement>;
      
      const debouncedSearch = this.debounce(() => {
        const filter = input.value.trim().toLowerCase();

        iconEls.forEach(iconEl => {
          const item = iconEl.querySelector("span");
          const txtValue = item?.textContent?.trim().toLowerCase();
          console.log('txtValue', txtValue);
          iconEl.style.display = txtValue?.includes(filter) ? "" : "none";
        });
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


  // editor.DomComponents.addType('iconPicker', {
  //   view: {
  //     events: {
  //       click: 'onActive',
  //     },
  //     onActive() {
  //       editor.Commands.run('icon-picker')
  //     },
  //   },
  // });
};

export default iconPickerPopupType;
