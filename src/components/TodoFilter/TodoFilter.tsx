import { TPriority } from "@/Types/todo.data.type";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";


const TodoFilter = ({ priority, setPriority }: TPriority) => {
    // console.log(priority);


    return (
        <section>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="bg-primary-gradient">Filter</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
                        <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    );
};

export default TodoFilter;