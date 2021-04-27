import './home.scss'
import headerBg from '../images/header.png'
import * as echarts from 'echarts'
import {useEffect, useRef} from "react";
export const Home = ()=>{
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    console.log(divRef.current)
    if(divRef?.current) {
      const myChart = echarts.init(divRef?.current);
      myChart.setOption({

        xAxis: {
          data: ['1', '2', '3', '4', '5', '6','7','8','9'],
          axisLabel:{
            fontSize:6
          }
        },
        yAxis: {
          axisLabel:{
            fontSize:6
          }
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20,30,30,40]
        }]
      });
    }

  },[])
  return <div className={"home"}>
    <header style={{backgroundImage:`url(${headerBg})`}}></header>
    <main>
      <section className="section1">
        <div className="bordered 管辖统计">
          <h2>管辖统计</h2>
          <div ref={divRef} className="chart"></div>
        </div>
      </section>
      <section className="bordered section2"></section>
      <section className="bordered section3"></section>
      <section className="bordered section4"></section>
      <section className="bordered section5"></section>
    </main>
  </div>
}
