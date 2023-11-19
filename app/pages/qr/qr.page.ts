import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-qr",
  templateUrl: "./qr.page.html",
  styleUrls: ["./qr.page.scss"],
})
export class QrPage implements OnInit {
  qrCodeString = "This is a secret qr code message";

  constructor() {}

  ngOnInit() {}
}
