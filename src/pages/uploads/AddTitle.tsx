import { Layout } from "@/layout/Layout";
import { ButtonBy, LinkStyle } from "@/ui/Button";
import { Button, TextField, TextareaAutosize } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function addTitle() {
  return (
    <Layout>
      <TextareaAutosize />
      <TextField placeholder="Hi" />
      <Link href="/uploads" style={LinkStyle}>
        <Button>Go Back</Button>
      </Link>
      <Link href="/uploads/AddCatigory" style={LinkStyle}>
        <ButtonBy>Next</ButtonBy>
      </Link>
    </Layout>
  );
}
