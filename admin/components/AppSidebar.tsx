import { Calendar, ChevronUp, Home, Inbox, Plus, Search, Settings, Shirt, User, User2, ShoppingBasket } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import AddOrder from "./AddOrder";
import AddUser from "./AddUser";
import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
			<SidebarHeader className="py-4">
					<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<Link href="/">
									<Image src="/globe.svg" alt="logo" width={20} height={20} />
									<span>Web Buy.</span>
								</Link>
							</SidebarMenuButton>
					</SidebarMenuItem>
			</SidebarHeader>
			<SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
									{item.title === 'Inbox' && (
										<SidebarMenuBadge>24</SidebarMenuBadge>
									)}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

				{/* PRODUCTS SIDEBAR */}
				<SidebarGroup>
					<SidebarGroupLabel>Products</SidebarGroupLabel>
					<SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Product</span>
          </SidebarGroupAction>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="/products">
										<Shirt />
										See All Products
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Sheet>
										<SheetTrigger asChild>
											<SidebarMenuButton asChild>
												<Link href="/#">
													<Plus />
													Add Product
												</Link>
											</SidebarMenuButton>
										</SheetTrigger>
										<AddProduct />
									</Sheet>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Sheet>
										<SheetTrigger asChild>
											<SidebarMenuButton asChild>
												<Link href="/#">
													<Plus />
													Add Category
												</Link>
											</SidebarMenuButton>
										</SheetTrigger>
										<AddCategory />
									</Sheet>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				{/* USERS SIDEBAR */}
				<SidebarGroup>
					<SidebarGroupLabel>Users</SidebarGroupLabel>
					<SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Product</span>
          </SidebarGroupAction>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="/users">
										<User />
										See All Users
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Sheet>
										<SheetTrigger asChild>
											<SidebarMenuButton asChild>
												<Link href="/#">
													<Plus />
													Add user
												</Link>
											</SidebarMenuButton>
										</SheetTrigger>
										<AddUser />
									</Sheet>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				{/* ORDERS / PAYMENTS SIDEBAR */}
				<SidebarGroup>
					<SidebarGroupLabel>Orders / Payments</SidebarGroupLabel>
					<SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Order</span>
          </SidebarGroupAction>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="/payments">
										<ShoppingBasket />
										See All Transcations
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Sheet>
										<SheetTrigger asChild>
											<SidebarMenuButton asChild>
												<Link href="/#">
													<Plus />
													Add Order
												</Link>
											</SidebarMenuButton>
										</SheetTrigger>
										<AddOrder />
									</Sheet>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

      </SidebarContent>
			<SidebarFooter>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton>
								<User2 /> John Doe <ChevronUp className="ml-auto"/>
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem>Account</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Sign out</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarFooter>
    </Sidebar>
  )
}