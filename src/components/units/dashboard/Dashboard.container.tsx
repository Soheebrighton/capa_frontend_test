import DashboardUI from "./Dashboard.presenter";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [stores, setStores] = useState<any[]>([]);
  useEffect(() => {
    axios.get("http://localhost:5000/db").then((data) => {
      setStores(data.data.requests);
    });
  }, []);

  const onList = stores.filter((el: any) => el.status === "상담중");

  const [isOn, setIsOn] = useState(false);
  const [isMethod, setIsMethod] = useState(false);
  const [isMaterial, setIsMaterial] = useState(false);
  const [buttonEvent, setButtonEvent] = useState();

  const onClickMethod = (event: any) => {
    setIsMethod((prev) => !prev);
    // setButtonEvent(event.target);
  };

  const onClickMaterial = (event: any) => {
    setIsMaterial((prev) => !prev);
    // setButtonEvent(event.target);
  };

  // window.addEventListener("click", (e) => handleClose(e));

  // const handleClose = (event: any) => {
  //   if (buttonEvent !== event.target) {
  //     setIsMethod(false);
  //   } else {
  //     setIsMethod(true);
  //   }
  // };
  // useEffect(() => {
  //   const onClickMethod = () => {

  //   }
  // }, []);

  const methods: string[] = ["밀링", "선반"];
  const materials: string[] = ["알루미늄", "탄소강", "구리", "합금강", "강철"];
  const [checkedList, setCheckedLists] = useState<string[]>([]);

  const [methodsCheckedList, setMethodsCheckedList] = useState<string[]>([]);
  const [materialsCheckedList, setMaterialsCheckedList] = useState<string[]>(
    []
  );

  const onChangedChecked = (el: any) => (event: any) => {
    if (event.target.checked) {
      setCheckedLists([...checkedList, el]);
    } else {
      setCheckedLists(checkedList.filter((keyword) => keyword !== el));
    }
  };

  const onChangedMethodChecked = (el: any) => (event: any) => {
    if (event.target.checked) {
      setMethodsCheckedList([...methodsCheckedList, el]);
    } else {
      setMethodsCheckedList(
        methodsCheckedList.filter((keyword) => keyword !== el)
      );
    }
  };

  const onChangedMaterialChecked = (el: any) => (event: any) => {
    if (event.target.checked) {
      setMaterialsCheckedList([...materialsCheckedList, el]);
    } else {
      setMaterialsCheckedList(
        materialsCheckedList.filter((keyword) => keyword !== el)
      );
    }
  };

  const onClickRefresh = () => {
    setMethodsCheckedList([]);
    setMaterialsCheckedList([]);
    setIsMaterial(false);
    setIsMethod(false);
  };

  return (
    <DashboardUI
      stores={stores}
      methods={methods}
      materials={materials}
      onList={onList}
      checkedList={checkedList}
      methodsCheckedList={methodsCheckedList}
      materialsCheckedList={materialsCheckedList}
      isOn={isOn}
      isMethod={isMethod}
      isMaterial={isMaterial}
      setIsOn={setIsOn}
      setIsMaterial={setIsMaterial}
      setCheckedList={setCheckedLists}
      onClickMethod={onClickMethod}
      onClickMaterial={onClickMaterial}
      onChangedChecked={onChangedChecked}
      onChangedMethodChecked={onChangedMethodChecked}
      onChangedMaterialChecked={onChangedMaterialChecked}
      onClickRefresh={onClickRefresh}
    />
  );
}
