import React, {useState} from 'react'
import {AccountCircle,AccessTime, SignalCellularAlt, PeopleAlt, LocalGroceryStore,Folder,Receipt,Work,Share,ExpandMore,ExpandLess} from '@mui/icons-material';
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {

  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);
  const [isExpanded3, setExpanded3] = useState(false);
  const [isExpanded4, setExpanded4] = useState(false);
  const [isExpanded5, setExpanded5] = useState(false);
  function expand() {
    setExpanded(()=> isExpanded !== true)
  };
  function expand1() {
    setExpanded1(()=> isExpanded1 !== true)
  };
  function expand2() {
    setExpanded2(()=> isExpanded2 !== true)
  };
  function expand3() {
    setExpanded3(()=> isExpanded3 !== true)
  };
  function expand4() {
    setExpanded4(()=> isExpanded4 !== true)
  };
  function expand5() {
    setExpanded5(()=> isExpanded5 !== true)
  }

  return (
    <div className='sidebar'>
      <div className='sidebarWreapper'>
        <div className='sidebarTopHeader'>
            <div className='sidebarHeader'>
              <AccountCircle sx={{ fontSize: 75 }} className='icon'/>
              <h4 className='login'>purvesh@gmail.com</h4>
              <p className='login'>Your tier: <span>Premium</span></p>
            </div>
              <hr className='sidebarLine'/>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Reports</h3>
          <ul className='sidebarList'>
          <Link to="" className="link">
            <li><span className="mainMenu active"><AccessTime className='sidebarIcon'/> Dashbord</span></li>
            </Link>
            <li><span className="mainMenu"><SignalCellularAlt className='sidebarIcon'/> Dashboard Alternative</span></li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Management</h3>
            <ul className='sidebarList'><span onClick={expand} className="mainMenu"><PeopleAlt className='sidebarIcon'/> Customer {isExpanded ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
            {isExpanded && ( <div>
              <Link to="/customer-list" className="link">
                <li className='sidebarListItem'>List Customers</li>
              </Link>

              <Link to="/newUser" className="link">
                <li className='sidebarListItem'> New Customer</li>
              </Link>

              <Link to="/customer-edit/:userId" className="link">
                <li className='sidebarListItem'> Edit Customer</li>
              </Link>
              </div>
            )
            }
            </ul>
            <ul className='sidebarList'><span onClick={expand1} className="mainMenu"><LocalGroceryStore className='sidebarIcon'/> Products {isExpanded1 ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
            {isExpanded1 && ( <div>
                <Link to="/products" className="link">
                  <li className='sidebarListItem'>List Products</li>
                </Link>

                <Link to="/newproduct" className="link">
                  <li className='sidebarListItem'>Create Product</li>
                </Link>

                <Link to="/product/:productId" className="link">
                  <li className='sidebarListItem'>Edit Product</li>
                </Link>
                </div>
            )
            }
            </ul>
            <ul className='sidebarList'><span onClick={expand2} className="mainMenu"><Folder className='sidebarIcon'/> Orders {isExpanded2 ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
            {isExpanded2 && ( <div>
              <li className='sidebarListItem'>List Orders</li>
              <li className='sidebarListItem'>View Order</li>
              <li className='sidebarListItem'>Edit Order</li>
              </div>
            )
            }
            </ul>
            <ul className='sidebarList'><span onClick={expand3} className="mainMenu"><Receipt className='sidebarIcon'/> Invoices {isExpanded3 ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
            {isExpanded3 && ( <div>
              <li className='sidebarListItem'>View Invoice</li>
              </div>
            )
            }
            </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Applications</h3>
            <ul className='sidebarList'><span onClick={expand4} className="mainMenu"><Work className='sidebarIcon'/> Projects Platform {isExpanded4 ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
            {isExpanded4 && ( <div>
              <li className='sidebarListItem'>View Projects</li>
              </div>
            )
            }
            </ul>
            <ul className='sidebarList'><span onClick={expand5} className="mainMenu"><Share className='sidebarIcon'/> Social Platform {isExpanded5 ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
            {isExpanded5 && ( <div>
              <li className='sidebarListItem'>Facebook</li>
              <li className='sidebarListItem'>Twitter</li>
              </div>
            )
            }
            </ul>
        </div>
        
      </div>
    </div>
  )
}
