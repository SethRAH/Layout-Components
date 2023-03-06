import { customElement } from "solid-element";
import HBoxContainer from "./components/HBoxContainer";
import VBoxContainer  from "./components/VBoxContainer";

export function registerWebComponents(){
    customElement('hbox-container', HBoxContainer);
    customElement('vbox-container', VBoxContainer);
}