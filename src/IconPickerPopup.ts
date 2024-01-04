import materialIcons from '../_data/versions.json'
import IEditor from './types/editor';

const IconPickerPopup = (editor: IEditor) => {
  return (
    `<div id="googleIconPicker" class="googleIconPicker items-center justify-center" ref={wrapperRef}>
      <div class="googleIconPicker__overlay"></div>
      <div class="googleIconPicker__content gjs-one-bg gjs-two-color gjs-mdl-dialog">
        <span class="close flex justify-end googleIconPicker__close gjs-mdl-btn-close">⨯</span>
        <div class="googleIconPicker__filterBar gjs-mdl-header">
          <div class="googleIconPicker__search gjs-field gjs-am-add-field">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search" autofocus>
          </div>
          <div class="googleIconPicker__customization">
            <div id="gjs-clm-input-c" data-states-c="">
              <label>Style</label>

              <div class="gjs-field gjs-select">
                <span id="gjs-input-holder">
                  <select id="gjs-clm-states" class="gjs-clm-states" name="style" title="Style">
                    <option value="material-symbols-outlined">Outlined</option>
                    <option value="material-symbols-rounded">Rounded</option>
                    <option value="material-symbols-sharp">Sharp</option>
                  </select>
                </span>
                <div class="gjs-sel-arrow">
                  <div class="gjs-d-s-arrow"></div>
                </div>
              </div>
            </div>
            
            <div id="gjs-clm-input-c" data-states-c="">
              <label>Fill</label>

              <div class="gjs-field gjs-select">
                <span id="gjs-input-holder">
                  <select id="gjs-clm-states" class="gjs-clm-states" name="fill" title="Fill">
                    <option value="0" selected>0</option>
                    <option value="1">1</option>
                  </select>
                </span>
                <div class="gjs-sel-arrow">
                  <div class="gjs-d-s-arrow"></div>
                </div>
              </div>
            </div>

            <div id="gjs-clm-input-c" data-states-c="">
              <label>Weight</label>

              <div class="gjs-field gjs-select">
                <span id="gjs-input-holder">
                  <select name="weight" title="Weight">
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400" selected>400</option>
                    <option value="500">500</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                  </select>
                </span>
                <div class="gjs-sel-arrow">
                  <div class="gjs-d-s-arrow"></div>
                </div>
              </div>
            </div>


            <div id="gjs-clm-input-c" data-states-c="">
              <label>Grade</label>

              <div class="gjs-field gjs-select">
                <span id="gjs-input-holder">
                  <select name="grade" title="Grade">
                    <option value="-25">-25</option>
                    <option value="0" selected>0</option>
                    <option value="200">200</option>
                  </select>
                </span>
                <div class="gjs-sel-arrow">
                  <div class="gjs-d-s-arrow"></div>
                </div>
              </div>
            </div>

            
            <div id="gjs-clm-input-c" data-states-c="">
              <label>Optical Size</label>

              <div class="gjs-field gjs-select">
                <span id="gjs-input-holder">
                  <select name="opticalSize" title="Optical Size">
                    <option value="20">20</option>
                    <option value="24">24</option>
                    <option value="40">40</option>
                    <option value="48" selected>48</option>
                  </select>
                </span>
                <div class="gjs-sel-arrow">
                  <div class="gjs-d-s-arrow"></div>
                </div>
              </div>
            </div>
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
                  class="googleIconPicker__icon material-icons material-symbols-outlined" 
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
