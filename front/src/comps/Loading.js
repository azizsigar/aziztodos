import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const Loading = () => {
    toast.success('Data fetched successfully!');
  return (
    <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  )
}
