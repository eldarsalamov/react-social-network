import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Shamil" },
    { id: 2, name: "Alvi" },
    { id: 3, name: "Alim" },
    { id: 4, name: "Eldar" },
    { id: 5, name: "Mukhammad" },
  ];
  let messagesData = [
    { id: 1, messages: "Hi" },
    { id: 2, messages: "Bye" },
    { id: 3, messages: "Ufc" },
    { id: 4, messages: "ELdar HEllo" },
    { id: 5, messages: "Intocode" },
  ];
  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messagesData.map((m) => (
    <Message message={m.messages} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
