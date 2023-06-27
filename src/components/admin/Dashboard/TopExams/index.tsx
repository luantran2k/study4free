function DashboardTopExams() {
  return (
    <div>
      <p className="text-2xl font-medium mb-4">Top exams</p>
      <table className="table ">
        <thead>
          <tr className="bg-blue-900 text-white table-zebra text-sm">
            <th></th>
            <th>Title</th>
            <th className="text-center">Completed</th>
          </tr>
        </thead>
        <tbody className="[&_td]:py-[1.38rem]">
          {Array(10)
            .fill(undefined)
            .map((_, i) => (
              <tr key={i} className="h-12">
                <td>1</td>
                <td>Exam 1</td>
                <td className="text-center">100</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTopExams;
