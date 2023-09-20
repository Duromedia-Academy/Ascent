{
  /* Sub menu menu */
}
<div>
  {/* Sub menu menu titile */}
  <div className="pb-2 pl-2 border-b-4  uppercase text-xs text-gray-400 ">
    what you can sell
  </div>
  {/* Sub menu menu list */}
  <div className="">
    <div className="mt-5 capitalize pl-5 grid grid-cols-2 gap-4">
      <li to={"/"} className="p-2 rounded-md hover:bg-green-200">
        <Link>Online courses</Link>
      </li>
      <li to={"/"} className="p-2 rounded-md hover:bg-green-200">
        <Link>Coaching </Link>
      </li>
      <li to={"/"} className="p-2 rounded-md hover:bg-green-200">
        <Link>Digital Downloads</Link>
      </li>
      <li to={"/"} className="p-2 rounded-md hover:bg-green-200">
        <Link>Entrerprenuer</Link>
      </li>
      <li to={"/"} className="p-2 rounded-md hover:bg-green-200">
        <Link>Training</Link>
      </li>
      <li to={"/"} className="p-2 rounded-md hover:bg-green-200">
        <Link>kiddies</Link>
      </li>
    </div>

    <li to={"/"} className="pl-5 mt-5 font-bold border-b-2 pb-1 text-green-900">
      <Link to={"/"} className="flex space-x-2  items-center">
        {" "}
        <span>Product overview</span>{" "}
        <span>
          <BsArrowRight />
        </span>{" "}
      </Link>
    </li>
  </div>
</div>;
