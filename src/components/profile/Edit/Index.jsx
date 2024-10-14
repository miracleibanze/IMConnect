const General = () => {
  return (
    <div className="p-4">
      <h3 className="h3 font-bold">Setting</h3>
      <div className="flex-center flex-col w-full max-w-lg">
        <a
          href="/profile/edit/personal_information"
          className="w-full px-4 py-2 rounded-md hover:bg-zinc-200/50"
        >
          Personal Information
        </a>
        <a className="w-full px-4 py-2 rounded-md hover:bg-zinc-200/50">
          Notification Information
        </a>
        <a className="w-full px-4 py-2 rounded-md hover:bg-zinc-200/50">
          {" "}
          Information
        </a>
      </div>
    </div>
  );
};

export default General;
