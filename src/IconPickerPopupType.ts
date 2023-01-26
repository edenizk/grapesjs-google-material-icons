import IconPickerPopup from './IconPickerPopup'
import IEditor from './types/editor';

export const iconPickerPopupType = (editor: IEditor) => {
  editor.Commands.add('run:open-icons', {
    run() {
      console.log('add');
      const editorEl = editor.getEl();
      console.log('editor', editor)
      if (editorEl) {
        editorEl.insertAdjacentHTML('beforebegin', IconPickerPopup());
      }
    },
    close() {
      const editorEl = editor.getEl();
      const picker = editorEl.querySelector('.googleIconPicker');

      if (picker) {
        picker.remove();
      }
    }
  })


  editor.DomComponents.addType('iconPicker', {
    view: {
      events: {
        click: 'onActive',
      },
      onActive() {
        editor.Commands.run('run:open-icons')
        // const modal = document.getElementById('googleIconPicker');

        // if (modal !== null) {
        //   modal.classList.add('active');
        // }
      },
    },
  });
};

export default iconPickerPopupType;
