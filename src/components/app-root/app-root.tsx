import "@ionic/core";

import { Component, h, State } from "@stencil/core";
import { LoadingCard } from "../loading-card/loading-card";
import { getBitcoinPrice } from "../../api/Bitcoin";
import { BitcoinCard } from "../bitcoin-card/bitcoin-card";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  @State() loading: boolean = true;
  @State() bitcoinInfo: any = {};
  async componentWillLoad() {
    try {
      this.bitcoinInfo = await getBitcoinPrice();
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Bitcoin Price Tracker</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <section class="bitcoin__header">
            <ion-icon name="logo-bitcoin" class="bitcoin__logo" />
          </section>
          {this.loading
            ? this.createLoadingCards()
            : Object.keys(this.bitcoinInfo.bpi).map(item => (
                <BitcoinCard detail={this.bitcoinInfo.bpi[item]} />
              ))}
        </ion-content>
      </ion-app>
    );
  }
  createLoadingCards() {
    return (
      <div>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    );
  }
}
