import { ButtonBy, LinkStyle } from "@/ui/Button";
import { Button, TextField, TextareaAutosize } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function addTitle() {
  return (
    <div>
      <TextareaAutosize />
      <TextField placeholder="Hi" />
      <Link href="/uploads" style={LinkStyle}>
        <Button>Назад</Button>
      </Link>
      <Link href="/uploads/AddCatigory" style={LinkStyle}>
        <ButtonBy>Далее</ButtonBy>
      </Link>
    </div>
  );
}
