"use client";

import { useEffect, useRef } from "react";
import { VRButton } from "three/addons/webxr/VRButton.js";
import { UranusModel } from "./model";
import useSpeech from "@/components/TextToSpeech";
import { dialog } from "./content";

export default function Mars() {
  const initialized = useRef(false);

  useSpeech(dialog)

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const model = new UranusModel();
    document.body.appendChild(VRButton.createButton(model.renderer));
  }, []);

  return (
    <div className="">
      <main className=""></main>
    </div>
  );
}
