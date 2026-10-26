"use client";

import { FormEvent, useRef } from "react";

export default function ResumeRequest({ variant = "text" }: { variant?: "text" | "light" }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Résumé request from ${data.get("name")}`);
    const body = encodeURIComponent([
      "Hello Joshua,",
      "",
      "I would like to request a copy of your résumé.",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      "",
      "Reason for request:",
      String(data.get("reason")),
    ].join("\n"));

    dialogRef.current?.close();
    window.location.href = `mailto:Joshuathompson.pro@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <button className={variant === "light" ? "button light resume-button" : "text-link resume-button"} type="button" onClick={() => dialogRef.current?.showModal()}>
        Request résumé <span>→</span>
      </button>
      <dialog className="resume-dialog" ref={dialogRef} aria-labelledby="resume-dialog-title">
        <div className="dialog-top">
          <p>RECRUITER REQUEST</p>
          <button type="button" aria-label="Close résumé request form" onClick={() => dialogRef.current?.close()}>×</button>
        </div>
        <h2 id="resume-dialog-title">Request Joshua&apos;s résumé.</h2>
        <p className="dialog-intro">Tell me who you are and why you&apos;d like a copy. Submitting opens your email app with the request ready to send.</p>
        <form onSubmit={submitRequest}>
          <div className="field-pair">
            <label>Full name<input name="name" autoComplete="name" required /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <div className="field-pair">
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label>
            <label>Company <span>(optional)</span><input name="company" autoComplete="organization" /></label>
          </div>
          <label>Reason for requesting a copy<textarea name="reason" rows={4} required /></label>
          <button className="button primary" type="submit">Prepare email request <span>↗</span></button>
        </form>
      </dialog>
    </>
  );
}
