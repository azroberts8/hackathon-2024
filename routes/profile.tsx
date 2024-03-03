import { PageProps } from "$fresh/server.ts";
import NavigationBar from "../components/Nav.tsx";


export default function Profile(props: PageProps) {
    return (
        <div>
            <NavigationBar />
            <div class="px-4 py-8 mx-auto bg-[#FF31EC]"> MY PROFILE BABYYY</div>
        </div>

    );
}