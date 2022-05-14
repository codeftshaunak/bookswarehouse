import React from "react";

function Blog() {
  return (
    <>
      <div className="section__4">
        <h3>Difference Between JavaScript And NodeJs?</h3>
        <p>
          Basically, JavaScript It is a scripting language, but JS is basically
          the ECMA script’s updated version. Javascript is mainly utilised in
          making the HTML web pages more dynamic and interactive.
          <br />
          In the case of Node It is a JS runtime environment that lets
          Javascript to be run on the server-side. It is cross-platform, and it
          thus allows the JS code to run outside any browser easily.
        </p>
        <hr />
        <h3>When we use mongodb and when node js</h3>
        <p>
          1 Nodejs is a Javascript engine that you can write any application you
          want with (by programming in the Javascript language). It runs your
          Javascript code. Most commonly, it is used to build servers that can
          respond to web requests, though it can be used for lots of other types
          of code too.
          <br />
          MongoDB is a database engine. Code within some application or server
          uses MongoDB to save, query or update data in a database. There are
          many web servers built with nodejs that will then use MongoDB for
          storing data
        </p>
        <hr />
        <h3>Purpose of JWT & How it works?</h3>
        <p>
          JWT means JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server.JWTs differ
          from other web tokens in that they contain a set of claims. Claims are
          used to transmit information between two parties. What these claims
          are depends on the use case at hand. For example, a claim may assert
          who issued the token, how long it is valid for, or what permissions
          the client has been granted.
        </p>
      </div>
    </>
  );
}

export default Blog;
