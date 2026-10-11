import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import headshot from '../assets/headshot.jpg';

const SideNav = () => {
    return (
        <aside className="SideNav">
	    <nav>
	    	<Stack direction="column" spacing={2}>
                    <ul>
		    	<li>Link Here</li>
		    	<li>Link Here</li>
		    	<li>Link Here</li>
		    </ul>
		    <Avatar alt="Wren Miles headshot" src={headshot} />
	        </Stack>
	    </nav>
        </aside>
    )
}

export default SideNav;
