"use client";
import { deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { useState } from "react";

export default function useFirebaseForm() {
  // File upload
  const [file, setFile] = useState(null);
  // HandleChange File
  const handleChange = (event) => {
    const newFile = event.target.files[0];
    setFile(newFile);
  };
  // Create product
  const createProduct = async (data, date) => {
    const { day, month, year } = date;
    // storage
    const storageRef = ref(storage, data.slug);
    const image = await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(image.ref);
    // firestore
    const docRef = doc(db, "products", data.slug);
    const product = await setDoc(docRef, {
      ...data,
      image: imageUrl,
      day: day,
      year: year,
      month: month,
    });
    return product;
  };
  const updateProduct = async (data, slug) => {
    // Update image
    if (file) {
      const storageRef = ref(storage, slug);
      await uploadBytes(storageRef, file);
      data.image = await getDownloadURL(storageRef);
    }
    // Update data
    const docRef = doc(db, "products", slug);
    await updateDoc(docRef, data);
  };

  // Delete Product
  const deleteProduct = async (slug) => {
    // Delete image from storage
    const storageRef = ref(storage, slug);
    await deleteObject(storageRef);
    // Delete doc from firestore
    const docRef = doc(db, "products", slug);
    await deleteDoc(docRef);
  };

  return { createProduct, handleChange, updateProduct, deleteProduct };
}
