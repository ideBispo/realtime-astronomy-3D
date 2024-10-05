"use client";

import { useEffect, useRef } from "react";
import { MercuryModel } from "./model";
import { VRButton } from "three/addons/webxr/VRButton.js";
import { useRouter } from "next/navigation";
import useSpeech from "@/components/TextToSpeech";
import { dialog } from "./content";

export default function Mars() {

  const router = useRouter()
  const initialized = useRef(false)
  const model = useRef<MercuryModel>()

  useSpeech(dialog)

  useEffect(() => {

    if (initialized.current) return;
    initialized.current = true;
    model.current = new MercuryModel()
    document.body.appendChild(VRButton.createButton(model.current.renderer));

  }, []);

  function navigateTo(route: string) {
    model.current?.cameraController.zoomOut()

    setTimeout(() => {
      if (model.current) {
        document.body.removeChild(model.current.canvas)
        model.current = undefined
      }
      router.push(route)
    }, 500)
  }

  return (
    <div className="bg-black">
      <main className="">
        <button className="m-2 text-gray-100" onClick={() => model.current?.focusOut()}> Visão total </button>
        <button className="m-2 text-gray-100" onClick={() => model.current?.focusOnMercury()}> Zoom </button>
        <button className="m-2 text-gray-100" onClick={() => navigateTo("/venus") }> Venus </button>
        <button className="m-2 text-gray-100" onClick={() => navigateTo("/earth") }> Terra </button>
        <button className="m-2 text-gray-100" onClick={() => navigateTo("/mars") }> Marte </button>
        <button className="m-2 text-gray-100" onClick={() => navigateTo("/jupiter") }> Jupiter </button>
        <button className="m-2 text-gray-100" onClick={() => navigateTo("/saturn") }> Saturno </button>
        <button className="m-2 text-gray-100" onClick={() => navigateTo("/uranus") }> Urano </button>
        <button className="m-2 text-gray-100" onClick={() => navigateTo("/neptune") }> Netuno </button>
      </main>
    </div>
  );
}
