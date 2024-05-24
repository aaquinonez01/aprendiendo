
const Tasks = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl mb-2">Tareas Pendientes</h2>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Tarea</th>
            <th className="py-2 px-4 border-b">Estado</th>
            <th className="py-2 px-4 border-b">Responsable</th>
            <th className="py-2 px-4 border-b">Fecha de Vencimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Revisión de código</td>
            <td className="py-2 px-4 border-b">Pendiente</td>
            <td className="py-2 px-4 border-b">Juan</td>
            <td className="py-2 px-4 border-b">21/05/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
