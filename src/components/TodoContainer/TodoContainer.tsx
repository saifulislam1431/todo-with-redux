import { PenBoxIcon, Trash2Icon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useDeleteTodoMutation, useGetTodosQuery, useUpdateStatusMutation } from "@/redux/apis/baseApi";
import { TTodo } from "@/Types/todo.data.type";
import Swal from 'sweetalert2'


const TodoContainer = ({ priority }: { priority: string }) => {
    const { data } = useGetTodosQuery(priority);
    const [updateStatus] = useUpdateStatusMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    // console.log(data);

    // console.log(isLoading, isError);

    const toggleStatus = (todo: TTodo) => {
        const id = todo?._id;
        const status = !todo?.status;
        const data = {
            id,
            status
        }
        updateStatus(data)

    }


    const handleDelete = async (id: string | undefined) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this todo!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteTodo(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your todo has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <section>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow className="text-[14px] flex">
                            <TableHead className="text-purple-500 font-bold ">Checked</TableHead>
                            <TableHead className="text-purple-500 font-bold flex-1">Title</TableHead>
                            <TableHead className="text-purple-500 font-bold flex-1">Description</TableHead>
                            <TableHead className="text-purple-500 font-bold">Priority</TableHead>
                            <TableHead className="text-purple-500 font-bold flex-1 text-center">Status</TableHead>
                            <TableHead className="text-purple-500 font-bold text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="space-y-3">
                        {
                            data?.map((todo: TTodo) => <TableRow className="bg-white flex items-center text-[13px] font-semibold" key={todo?._id}>
                                <TableCell className="mr-14">  <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" onCheckedChange={() => toggleStatus(todo)} defaultChecked={todo?.status ? true : false} />
                                </div></TableCell>
                                <TableCell className="flex-1">{todo?.title}</TableCell>
                                <TableCell className="flex-1">{todo?.description}</TableCell>
                                <TableCell className="flex-1"><div className={`h-2 w-2 rounded-full inline-flex items-center ${todo?.priority === "High" ? "bg-red-500" : todo?.priority === "Low" ? "bg-green-600" : "bg-yellow-500"}`}></div> {todo?.priority}</TableCell>
                                <TableCell className={`text-right ${todo?.status ? "text-green-500" : "text-yellow-500"}`}>{todo?.status ? "Done" : "Pending"}</TableCell>
                                <TableCell className="text-right flex items-center gap-3">
                                    <button onClick={() => handleDelete(todo?._id)} className="p-2 border rounded bg-red-500 font-medium border-red-500 hover:bg-transparent text-white hover:text-red-500"><Trash2Icon className="w-4 h-4" /></button>
                                    <button className="p-2 border rounded bg-green-500 font-medium border-green-500 hover:bg-transparent text-white hover:text-green-500"><PenBoxIcon className="w-4 h-4" /></button>
                                </TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};

export default TodoContainer;