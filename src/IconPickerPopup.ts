import type grapesjs from 'grapesjs';
import 'material-symbols';
import materialIcons from '../_data/versions.json'
import IEditor from './types/editor';

const IconPickerPopup = (editor: IEditor) => {
  console.log('material icons', materialIcons);

  return (
    `<div id="googleIconPicker" class="googleIconPicker items-center justify-center" ref={wrapperRef}>
      <div class="googleIconPicker__overlay googleIconPicker__close"></div>
      <div class="googleIconPicker__content">
        <span class="close flex justify-end googleIconPicker__close">&times;</span>
        <input class="icon-searcher googleIconPicker__searcher" type="text" name="icon-searcher" placeholder="Search..." onChange={handleSearchChange}/>
        <div class="googleIconPicker__icons icons">
          ${
            Object.keys(materialIcons).map((icon) => (`
              <button
                aria-haspopup="dialog" 
                role="option" 
                aria-label="Search Icon" 
                aria-selected="false" 
                class="googleIconPicker__iconWrapper" 
              >
                <span 
                  class="googleIconPicker__icon material-symbols-outlined" 
                  style="font-size: 48px"
                >
                  ${icon}
                </span>
                <span class="googleIconPicker__iconName">
                  ${icon.replaceAll('_', ' ')}
                </span>
              </button>
            `)).join('')
          }
        </div>
      </div>
    </div>`
  );
};

export default IconPickerPopup;
