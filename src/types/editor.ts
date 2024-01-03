import {Editor} from 'grapesjs';

interface IEditor extends Editor {
  getEl: () => HTMLElement;
}

export default IEditor