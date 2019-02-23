import React, { Component } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import axios from "axios";

class Home extends Component {
  state = {
    accountId: "",
    token: "",
    name: "",
    email: "",
    loading: ""
  };

  submit = async () => {
    this.setState({ loading: "" });
    console.log("stuff");
    try {
      await axios.get(
        `http://localhost:3001?USER_FULLNAME=${this.state.name}&USER_EMAIL=${
          this.state.email
        }`
      );
      this.setState({ loading: "Loading" });
    } catch (e) {
      this.setState({ loading: e.message });
    }
  };

  //ACCESS_TOKEN=${this.state.token}&ACCOUNT_ID=${this.state.accountId}&

  render() {
    console.log(this.state.accountId);
    return (
      <div>
        <Head title="Home" />
        <Nav />

        <div className="hero">
          <h1 className="title">Welcome to Next!</h1>
          <p className="description">
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            Account ID
            <input
              name="account id"
              onChange={event =>
                this.setState({ accountId: event.target.value })
              }
            />
            <div>
              Temporary OAuth Token
              <a href="https://developers.docusign.com/oauth-token-generator">
                https://developers.docusign.com/oauth-token-generator
              </a>
            </div>
            <input
              name="account id"
              onChange={event =>
                this.setState({ accountId: event.target.value })
              }
            />
            Name of recipient
            <input
              name="account id"
              onChange={event => this.setState({ name: event.target.value })}
            />
            Email of recipient
            <input
              name="account id"
              onChange={event => this.setState({ email: event.target.value })}
            />
            <button onClick={this.submit}> Submit</button>
            {this.state.loading}
          </div>
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
