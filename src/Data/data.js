import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';



export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        href : '/dashboard/ecom',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        href : '/dashboard/orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'employees',
        href : '/dashboard/employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        href : '/dashboard/customers',
        icon: <RiContactsLine />,
      },
      {
        name: 'Products',
        href : '/dashboard/products',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Components',
    links: [
      {
        name: 'Banners',
        href : '/dashboard/banners',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Corner',
        href : '/dashboard/corners',
        icon: <IoMdContacts />,
      }
    ],
  },
  
];
