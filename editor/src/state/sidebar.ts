import { persist } from 'easy-peasy';

export enum PanelType {
  NAVIGATION = 'navigation',
  EDITOR = 'editor',
  TEMPLATE = 'tempalte',
}

export interface NavigationModel {
  panels: {
    [PanelType.NAVIGATION]: boolean;
    [PanelType.EDITOR]: boolean;
    [PanelType.TEMPLATE]: boolean;
  };
}

// const tavigationModel = persist<NavigationModel>({
//   panels: {

//   }
// }, { storage: 'localStorage' })

// export default todosModel;
