function DashboardTopUsers() {
  return (
    <div>
      <p className="text-2xl font-medium mb-4">Top Users</p>
      <table className="table">
        <thead>
          <tr className="bg-blue-900 text-white table-zebra text-sm">
            <th></th>
            <th>Avatar</th>
            <th>Username</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill(undefined)
            .map((_, i) => (
              <tr key={i} className="[&_td]:py-2">
                <td>1</td>
                <td className="flex items-center">
                  <img
                    src="http://res.cloudinary.com/dfyxzs4xp/image/upload/v1687404987/study4free/avatar/defaut/ko4j5narqakiodes4zte.png"
                    alt="avatar"
                    className="block w-12 h-12"
                  />
                </td>
                <td>User 1</td>
                <td>120</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTopUsers;
