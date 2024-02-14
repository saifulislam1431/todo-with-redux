import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useAddTodoMutation } from "@/redux/apis/baseApi";


const AddTodo = () => {
    const [addTodo] = useAddTodoMutation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");


    // console.log(isLoading, isError);


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = {
            title,
            description,
            priority,
            status: false
        }
        addTodo(data);


    }
    return (
        <section>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="bg-primary-gradient">Add TODO</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create upcoming todo!</DialogTitle>
                        <DialogDescription>
                            Save you upcoming todo and add into the checklist.
                        </DialogDescription>
                    </DialogHeader>
                    <form className="gap-4 py-4 space-y-3" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Title
                            </Label>
                            <Input
                                id="title"
                                className="col-span-3"
                                onBlur={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="description"
                                className="col-span-3"
                                onBlur={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Priority
                            </Label>
                            <Select onValueChange={(e) => setPriority(e)}>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="High">High</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="Low">Low</SelectItem>
                                </SelectContent>
                            </Select>

                        </div>
                        <DialogClose asChild className="w-full mt-5">
                            <Button type="submit" className="col-span-12">Add</Button>
                        </DialogClose>
                    </form>

                </DialogContent>
            </Dialog>
        </section>
    );
};

export default AddTodo;