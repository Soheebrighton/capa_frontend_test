export interface IPropsDashboardUI {
  stores: any[];
  methods: string[];
  materials: string[];
  onList: any[];
  checkedList: string[];
  isOn: boolean;
  isMethod: boolean;
  isMaterial: boolean;
  methodsCheckedList: string[];
  materialsCheckedList: string[];

  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMaterial: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckedList: React.Dispatch<React.SetStateAction<string[]>>;
  onClickMethod: (event: any) => void;
  onClickMaterial: (event: any) => void;
  onChangedChecked: (el: any) => (event: any) => void;
  onChangedMaterialChecked: (el: any) => (event: any) => void;
  onChangedMethodChecked: (el: any) => (event: any) => void;
  onClickRefresh: () => void;
}
