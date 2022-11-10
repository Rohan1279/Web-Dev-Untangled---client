import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div>
        <div className="w-full h-fit grid lg:grid-cols-2 gap-5 p-5">
          <div className="bg-[#fce8e6] p-5 rounded-lg shadow-lg ">
            <h2 className="text-3xl font-bold text-left underline decoration-rose-900">
              <span className="text-5xl">W</span>hat is the difference between
              SQL and NoSQL
            </h2>
            <p className="text-base text-justify">
              <span className="text-2xl underline underline-offset-1">SQL</span>
              <br />
              SQL is a query programming language that manages RDBMS.SQL is
              primarily used to query and operate database systems.SQL does not
              support any connector.SQL follows a simple standard format without
              many or regular updates. SQL supports only a single storage
              engine.
            </p>
            <p className="text-base text-justify">
              <span className="text-2xl underline underline-offset-1">
                NoSQL
              </span>
              <br />
              Non-relational or distributed database system.They have dynamic
              schema. These databases are best suited for hierarchical data
              storage.These databases are not so good for complex queries.
              Horizontally scalable
            </p>
          </div>
          <div className="bg-[#fce8e6] p-5 rounded-lg shadow-lg ">
            <h2 className="text-3xl font-bold text-left underline decoration-rose-900">
              <span className="text-5xl">W</span>hat is JWT, and how does it
              work?
            </h2>
            <p className="text-xl text-justify">
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object. This information can
              be verified and trusted because it is digitally signed. JWTs can
              be signed using a secret (with the HMAC algorithm) or a
              public/private key pair using RSA or ECDSA.
            </p>
          </div>
          <div className="bg-[#fce8e6] p-5 rounded-lg shadow-lg ">
            <h2 className="text-3xl font-bold text-left underline decoration-rose-900">
              <span className="text-5xl">W</span>hat is the difference between
              javascript and NodeJS?
            </h2>
            <p className="text-xl text-justify">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node.js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language. It requires libraries that can be
              conveniently accessed from JavaScript programming to be more
              helpful.
            </p>
          </div>
          <div className="bg-[#fce8e6] p-5 rounded-lg shadow-lg ">
            <h2 className="text-3xl font-bold text-left underline decoration-rose-900">
              <span className="text-5xl">H</span>ow does NodeJS handle multiple
              requests at the same time?
            </h2>
            <p className="text-xl text-justify">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
