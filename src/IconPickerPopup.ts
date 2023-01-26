import type grapesjs from 'grapesjs';
import materialIcons from 'material-icons/_data/versions.json'

const IconPickerPopup = () => {
  console.log('material icons', materialIcons);
  // const wrapperRef = useRef<HTMLDivElement | null>(null);

  // const [filteredIcons, setFilteredIcons] = useState(materialIcons)
  // const [searchText, setSearchText] = useState('')
  // const searchValue = useDebounce(searchText, 100);

  // const handleClose = () => {
  //   if (wrapperRef.current) {
  //     wrapperRef.current.classList.remove('active');
  //   }
  // };
  
  // const iconSelect = (icon) => {
  //   if (!editor) return;

  //   console.log('editor', editor);
  //   const wrapper = editor.getWrapper().view.el;
  //   const selectedEl = wrapper.querySelector('.gjs-selected');
  //   selectedEl.innerHTML = icon;
  //   handleClose();
  // };

  // useEffect(() => {
  //   setFilteredIcons(() => materialIcons.filter((icon) => icon.includes(searchValue)))
  // }, [searchValue])
  

  // const handleSearchChange = (e) => {
  //   setSearchText(e.target.value)
  // }

  return (
    `<div id="googleIconPicker" class="googleIconPicker items-center justify-center" ref={wrapperRef}>
      <div class="googleIconPicker__overlay" onClick={() => handleClose()}></div>
      <div class="googleIconPicker__content">
        <span class="close flex justify-end googleIconPicker__close" onClick={() => handleClose()}>&times;</span>
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
                  class="googleIconPicker__icon material-icons material-symbols-outlined" 
                  style={{fontSize: "48px"}}
                >
                  ${icon}
                </span>
                <span class="googleIconPicker__iconName">
                  ${icon.replaceAll('_', ' ')}
                </span>
              </button>
              <i key={icon} class="googleIconPicker__icon material-icons" onClick={() => iconSelect(icon)}>${icon}</i>
            `))
          }
        </div>
      </div>
    </div>`
  );
};

export default IconPickerPopup;
