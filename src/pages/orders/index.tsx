
import DashboardWrapper from "../../components/DashboardWrapper";
import style from "./Orders.module.css";
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { Box, Stack, Text, Flex } from '@chakra-ui/layout';
import { Select } from "@chakra-ui/react";
import useDashboard from "../../hooks/useDashboard";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

export default function Orders() {

  useDashboard()

  return (
    <DashboardWrapper>
      <Stack spacing="15"  >
        <div className={`${style.ordersContainer} `} >
          <div className={`col-xl-9 col-lg-8 col-md-8 col-sm-6`} >
            <div className={`${style.topBar}`} >
              <div className={`${style.topOrderSideBar} bg-purple`}></div>
              <div className={`${style.topOrderText}`} >
                ORDERS
              </div>
            </div>
          </div>
          <div className={`${style.createNewOrder} col-xl-3 col-lg-4 col-md-4 col-sm-6`} >
            <Button className="form-control text-center style2-input text-white fw-700 font-xss bg-purple border-0 p-0">+ CREATE NEW ORDER</Button>
          </div>
        </div>
        <div className={`${style.filterSection} bg-purple`}>
          {/* <input placeholder='Search orders...' className={`${style.orderFilterInput} `} /> */}
          <Form.Control type="email" placeholder="Enter email" className={`${style.orderFilterInput} `} />
          <div className="row" style={{ marginTop: '15px' }}>
            <div className="col-lg-9" >
              <Box mt="auto">
                <Stack spacing={15} direction={"row"} className={style.orderFilter} >
                  <Form.Select className={`${style.orderFilterInput} `}>
                    <option>All shops</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select className={`${style.orderFilterInput} `}>
                    <option>All payment statusses</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select className={`${style.orderFilterInput} `}>
                    <option>All order statusess</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select className={`${style.orderFilterInput} `}>
                    <option>All order dates</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Stack>

              </Box>
            </div>
            <div className="col-lg-3">
              <div className={style.clearFilter}>
                <Stack spacing="7" direction="row">
                  <Text color="white" fontSize="17px" fontWeight="bold">X</Text>
                  <Text color="white" fontSize="17px">Clear filter</Text>
                </Stack>

              </div>
            </div>
          </div>
        </div>
        <div className={`${style.ordersContainer} `} >
          <div className={`col-xl-9 col-lg-8 col-md-8 col-sm-6`} >
            <div className={`${style.topBar}`} >
              <div className={`${style.filterSection2Text}`} >
                123 order found
              </div>
            </div>
          </div>
          <div className={`${style.createNewOrder} col-xl-3 col-lg-4 col-md-4 col-sm-6`} >
            <Form.Select className={`${style.orderFilterInput} `}>
              <option>Short by order number</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>

        </div>

        {[1, 2, 3, 4, 5, 6, 7].map(() => <div className={style.orderList}>

          <div className={style.orderListField} >
            ORDER ID
            <p className={style.orderListContent}>#123456789</p>
          </div>
          <div className={style.orderListField}>
            ORDER DATE
            <p className={style.orderListContent}>14-12-2-21, 09:49:04</p>
          </div>
          <div className={style.orderListField}>CUSTOMER
            <p className={style.orderListContent}>Jaden wolf</p>
          </div>
          <div className={style.orderListField}>PAYMENT METHOD
            <p className={style.orderListContent}>PayPal</p>
          </div>
          <div className={style.orderListField}>PAYMENT STATUS
            <p className={style.orderListContent}>Payment accepted</p>
          </div>
          <div className={style.orderListField} style={{ borderRightWidth: '0px' }}>ORDER STATUS
            <p className={style.orderListContent}>$313.29</p>
          </div>

        </div>)}
      </Stack>
    </DashboardWrapper>
  );
}
