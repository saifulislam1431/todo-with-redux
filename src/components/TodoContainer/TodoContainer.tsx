import { PenBoxIcon, Trash2Icon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";


const TodoContainer = () => {
    return (
        <section>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow className="text-[14px] flex">
                            <TableHead className="text-purple-500 font-bold ">Checked</TableHead>
                            <TableHead className="text-purple-500 font-bold flex-1">Title</TableHead>
                            <TableHead className="text-purple-500 font-bold flex-1">Description</TableHead>
                            <TableHead className="text-purple-500 font-bold flex-1 text-center">Status</TableHead>
                            <TableHead className="text-purple-500 font-bold text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="space-y-3">
                        <TableRow className="bg-white flex font-medium items-center">
                            <TableCell className="mr-14">  <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                            </div></TableCell>
                            <TableCell className="flex-1">	Title</TableCell>
                            <TableCell className="flex-1">Description</TableCell>
                            <TableCell className="text-center flex-1">Status</TableCell>
                            <TableCell className="text-right flex items-center gap-3">
                                <button className="p-2 border rounded bg-red-500 font-medium border-red-500 hover:bg-transparent text-white hover:text-red-500"><Trash2Icon className="w-4 h-4" /></button>
                                <button className="p-2 border rounded bg-green-500 font-medium border-green-500 hover:bg-transparent text-white hover:text-green-500"><PenBoxIcon className="w-4 h-4" /></button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};

export default TodoContainer;