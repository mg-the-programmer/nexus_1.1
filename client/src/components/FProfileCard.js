import React from "react";

export default function FProfileCard({ post }) {
  return (
    <article
      key={post.id}
      className="w flex flex-col items-start justify-between gap-y-2 rounded-md p-5 shadow ">
      <div className="relative flex items-center gap-x-4">
        <img
          src={post.author.imageUrl}
          alt=""
          className="h-16 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={post.author.href}>
              <span className="absolute inset-0" />
              {post.author.name}
            </a>
          </p>
          <p className="text-gray-600">{post.author.role}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.datetime} className="text-gray-500">
          {post.date}
        </time>
        <a
          href={post.category.href}
          className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-800 hover:bg-gray-100">
          {post.category.title}
        </a>
      </div>
      <div className="group flex flex-col gap-y-2">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={post.href}>
            <span />
            {post.title}
          </a>
        </h3>
        <p className="line-clamp-3 text-sm leading-6 text-gray-600">
          {post.description}
        </p>
      </div>
    </article>
  );
}
