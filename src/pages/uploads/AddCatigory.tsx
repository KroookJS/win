import { Button, ButtonBy, LinkStyle } from "@/ui/Button";

import Link from "next/link";
import React from "react";

export default function AddCatigory() {
  return (
    <div>
      <h2>Тут будет Select</h2>
      <Link href="/uploads/AddTitle" style={LinkStyle}>
        <Button>Назад</Button>
      </Link>
      <Link href="/" style={LinkStyle}>
        <ButtonBy>Загрузить</ButtonBy>
      </Link>
    </div>
  );
}
