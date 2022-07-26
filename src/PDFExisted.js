import React, { useRef } from "react";
import "./PDFExisted.scss";
import { renderToString } from "react-dom/server";
import { Col, Divider, Row, Table } from "antd";
import jsPDF from "jspdf";

function Prints() {
  return (
    <div className="container">
      <div style={{ padding: 20 }}>
        <Row>
          <Col>
            <Divider>
              <center>Invoice</center>
            </Divider>
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: 32 }}>
          <Col span={8}>
            <h3>Hey There</h3>
            <div>hdhsgd gdhgshgfkl</div>
            <div>hdhghfgdhg  iidii,</div>
            <div>jhdhghegghfdhdhdh,</div>
            <div>Bangalore - 560076</div>
          </Col>
          <Col span={8} offset={8}>
            <table>
              <tr>
                <th>Invoice # :</th>
                <td>1</td>
              </tr>
              <tr>
                <th>Invoice Date :</th>
                <td>01 08 2000</td>
              </tr>
              <tr>
                <th>Due Date :</th>
                <td>30 08 2001</td>
              </tr>
            </table>
          </Col>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <div>
            Bill To: <strong>jhdhjhf ijdfhfh</strong>
          </div>
          <div>Bannerghatt Road,</div>
          <div>Bangalore - 560076</div>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <Table
            dataSource={[
              {
                id: 1,
                name: "jhdj dijfidjfh idiudifuiu",
                description: "hdhfdhfhddh",
                price: 1599,
                quantity: 1,
              },
            ]}
            pagination={false}
          >
            <Table.Column title="Items" dataIndex="name" />
            <Table.Column title="Description" dataIndex="description" />
            <Table.Column title="Quantity" dataIndex="quantity" />
            <Table.Column title="Price" dataIndex="price" />
            <Table.Column title="Line Total" />
          </Table>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <Col span={8} offset={16}>
            <table>
              <tr>
                <th>djhjdhjfh :</th>
                <td>Rs. 1599</td>
              </tr>
              <tr>
                <th>dkjhfjdhfjh :</th>
                <td>Rs. 95.94</td>
              </tr>
              <tr>
                <th>dkjfhjdhf :</th>
                <td>Rs. 95.94</td>
              </tr>
              <tr>
                <th>Nett Total :</th>
                <td>Rs. 1790.88</td>
              </tr>
            </table>
          </Col>
        </Row>

        <Row style={{ marginTop: 48, textAlign: "center" }}>notes</Row>

        <Row style={{ marginTop: 48, textAlign: "center" }}>Footer</Row>
      </div>
    </div>
  );
}
const pdf = new jsPDF({ orientation: "p", unit: "px" });

const PDFExisted = () => {
  const ref = useRef(null);
  const PDFprint = () => {
    const html = renderToString(<Prints />);
    const htmlPdf = pdf.html(html, {
      autoPaging: "slice",
      windowWidth: 800,
      width: 700,
      html2canvas: { scale: 0.5, windowHeight: 600 },
      margin: 20,
      x: 10,
      y: 10,
    });
    htmlPdf.save("aa.pdf");
  };
  return (
    <div>
      <h2>If you want to bownload click on download button</h2>
      <br/>
      <button onClick={PDFprint}>download</button>
      <div ref={ref} id="invoice">
        <Prints />
      </div>
    </div>
  );
};

export default PDFExisted;
