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
        <div class="googleIconPicker__filterBar">
          <div class="googleIconPicker__search">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search" autofocus>
          </div>
          <div class="googleIconPicker__customization">
            <label>Fill</label>
            <select name="fill" title="Fill">
              <option value="0" selected>0</option>
              <option value="1">1</option>
            </select>
            <label>Weight</label>
            <select name="weight" title="Weight">
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400" selected>400</option>
              <option value="500">500</option>
              <option value="600">600</option>
              <option value="700">700</option>
            </select>
            <label>Grade</label>
            <select name="grade" title="Grade">
              <option value="-25">-25</option>
              <option value="0" selected>0</option>
              <option value="200">200</option>
            </select>
            <label>Optical Size</label>
            <select name="opticalSize" title="Optical Size">
              <option value="20">20</option>
              <option value="24">24</option>
              <option value="40">40</option>
              <option value="48" selected>48</option>
            </select>
          </div>
        </div>
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
