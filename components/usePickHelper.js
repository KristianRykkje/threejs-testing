import * as THREE from "three";
import { useState, useEffect } from "react";

export const usePickHelper = () => {
  const [pickedObject, setPickedObject] = useState(null);
  const [pickedObjectSavedColor, setPickedObjectSavedColor] = useState(0);
  const raycaster = new THREE.Raycaster();

  const pick = (normalizedPosition, scene, camera, time) => {
    if (pickedObject) {
      setPickedObjectSavedColor(pickedObject =>
        pickedObject.material.emissive.setHex(pickedObjectSavedColor),
      );
      setPickedObject(undefined);
    }

    // cast a ray through the frustum
    raycaster.setFromCamera(normalizedPosition, camera);
    // get the list of objects the ray intersected
    const intersectedObjects = raycaster.intersectObjects(scene.children);
    if (intersectedObjects.length) {
      setPickedObject(intersectedObjects[0].object);
      setPickedObjectSavedColor(pickedObject.material.emissive.getHex());
      setPickedObject(pickedObject =>
        pickedObject.material.emissive.setHex(
          (time * 8) % 2 > 1 ? 0xffff00 : 0xff0000,
        ),
      );
    }
  };

  // return { pick, }
};
