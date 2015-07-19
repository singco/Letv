 require.config({
        paths:{ 
            echarts:'./js/echarts',
            //echarts:'http://echarts.baidu.com/build/dist/echarts.js',
            'echarts/chart/bar' : './js/echarts-map',
            'echarts/chart/line': './js/echarts-map',
            'echarts/chart/map' : './js/echarts-map'
        }
    });
    
require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/map'
        ],
        function(ec) {
            //--- 圆环 ---
            var myChart = ec.init(document.getElementById('MyChart1'));
            var dataStyle = {
                normal: {
                label: {show:false},
                labelLine: {show:false}
                        }
                            };
            var placeHolderStyle = {
                normal : {
                color: 'rgba(0,0,0,0)',
                label: {show:false},
                labelLine: {show:false}
                        },
                emphasis : {
                 color: 'rgba(0,0,0,0)'
                            }
                                    };
            myChart.setOption({
				title: {
                text: 'Gender',
                subtext: 'LETV Video',
                sublink: 'http://www.letv.com',
                x: 'center',
                y: 'center',
                itemGap: 20,
                textStyle : {
                color : 'rgba(30,144,255,0.8)',
                fontFamily : '微软雅黑',
                fontSize : 35,
                fontWeight : 'bolder'
        }
    },
                tooltip : {
                show: true,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
                legend: {
                orient : 'vertical',
            x : document.getElementById('MyChart1').offsetWidth / 2,
            y : 45,
            itemGap:12,
            data:['65%的观众为男性','35%的观众为女性']
    },
                toolbox: {
            show : true,
            feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
                series : [
            {
            name:'1',
            type:'pie',
            clockWise:false,
            radius : [125, 150],
            itemStyle : dataStyle,
            data:[
                {
                    value:65,
                    name:'65%的观众为男性'
                },
                {
                    value:35,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'2',
            type:'pie',
            clockWise:false,
            radius : [100, 125],
            itemStyle : dataStyle,
            data:[
                {
                    value:35, 
                    name:'35%的观众为女性'
                },
                {
                    value:65,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        
    ]

            });
            
            // --- 饼图 ---
            var myChart2 = ec.init(document.getElementById('MyChart2'));
            myChart2.setOption({
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient : 'horizontal',
					y : "bottom",
					data:["0-18岁","19-29岁","30-39岁","40岁以上",]
				},
				toolbox: {
					show : true,
					feature : {
						mark : true,
						dataView : {readOnly: false}
					}
				},
				calculable : true,
				series : [
					{
						name:'访问来源',
						type:'pie',
						radius : ['50%', '70%'],
						itemStyle : {
							normal : {
								label : {
									show : false
								},
								labelLine : {
									show : false
								}
							},
							emphasis : {
								label : {
									show : true,
									position : 'center',
									textStyle : {
										fontSize : '30',
										fontWeight : 'bold'
									}
								}
							}
						},
						data:[
						{"name":"0-18岁","value":26980789},
						{"name":"19-29岁","value":24147656},
						{"name":"30-39岁","value":405222},
						{"name":"40岁以上","value":42689712}]
					}
				]       
            });
			
			// ---地图 ---
		var myChart3 = ec.init(document.getElementById('MyChart3'));
            option3 = {
					tooltip : {
                    trigger: 'item',
                		},
				series : [
					{
							name: '收视总量',
							type: 'map',
							mapType: 'china',
							itemStyle:{
								normal:{label:{show:true}},
								emphasis:{label:{show:true}}
							},
							mapLocation: {
								x: '25%'},
							roam: true,
							data:[
										{name: '北京',value: 7076583},
                						{name: '天津',value: 1628505},
                						{name: '上海',value: 3796581},
                						{name: '重庆',value: 1733104},
                						{name: '河北',value: 4760053},
                						{name: '河南',value: 5447796},
                						{name: '云南',value: 1708961},
                						{name: '辽宁',value: 3473958},
                						{name: '黑龙江',value: 2088568},
                						{name: '湖南',value: 3206803},
                						{name: '安徽',value:3009399},
                						{name: '山东',value: 5830247},
                						{name: '新疆',value: 678401},
                						{name: '江苏',value: 7597640},
                						{name: '浙江',value: 6078036},
                						{name: '江西',value: 1847078},
                						{name: '湖北',value:3150255},
                						{name: '广西',value: 1948086},
                						{name: '甘肃',value: 0},
                						{name: '山西',value: 2722090},
                						{name: '内蒙古',value: 1429150},
                						{name: '陕西',value: 2929856},
                						{name: '吉林',value: 1683825},
                						{name: '福建',value: 0},
                						{name: '贵州',value: 1386702},
                						{name: '广东',value:12332462},
                						{name: '青海',value: 239443},
                						{name: '西藏',value: 42198},
                						{name: '四川',value: 5220832},
                						{name: '宁夏',value: 299048},
               							{name: '海南',value: 577931},
                						{name: '台湾',value: 54470},
                						{name: '香港',value: 198772},
                						{name: '澳门',value: 46546}],
							}],
						dataRange: {
							orient: 'vertical',
							x: 'left',
							min: 0,
							max: 13000000,
							//color:['#FF6347','#FFE7BA'],
							text:['高','低'],           // 文本，默认为数值文本
							splitNumber:0,
							calculable:true
						}
					
			};
			myChart3.setOption(option3, true);
			
			//------
		var myChart4 = ec.init(document.getElementById('MyChart4'));
		    option4 = {
			tooltip : {
				trigger: 'axis'
			},
			toolbox: {
				show : true,
				feature : {
					mark : true,
					dataView : {readOnly: false}
				}
			},
			calculable : true,
			xAxis : [
				{
					type : 'value',
					position:'top'
				}
			],
			yAxis : [
				{
					type : 'category',
					data : ["汽车","亲子","纪录片","风尚","财经","音乐","体育","动漫","娱乐","热点","综艺","电影","电视剧"]
				}
			],
			series : [
				{
					name:'关注量',
					type:'bar',
					data:[18,29,30,31,44,248,322,697,880,1236,1703,1896,2277]
				}
			]
		};
		myChart4.setOption(option4, true);
		
		//---------------------
		 var myChart5 = ec.init(document.getElementById('MyChart5'));
                option5={
				
		  title : {
        //text: '温度计式图表',
        //subtext: 'Singco',
        //sublink: 'http://www.letv.com'
    },
    tooltip : {
        trigger: 'axis',
        //show: true,
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params){
            console.log(params);
            return params[0][1] + '<br/>'
                   + params[0][0] + ' : ' + params[0][2] + '<br/>'
                   + params[1][0] + ' : ' + params[1][2];
        }
    },
    legend: {
        selectedMode:false,
        data:['本科以下', '本科及以上']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['低购买力','中购买力','高购买力']
        }
    ],
    yAxis : [
        {
            type : 'value',
            boundaryGap: [0, 0.1]
        }
    ],
    series : [
        {
            name:'本科以下',
            type:'bar',
            stack: 'sum',
            barCategoryGap: '50%',
            itemStyle: {
                normal: {
                    color: 'tomato',
                    barBorderColor: 'tomato',
                    barBorderWidth: 6,
                    barBorderRadius:0,
                    label : {
                        show:true, position: 'insideTop'
                    }
                }
            },
            data:[68649734, 10258580, 9846180]
        },
       {
            name:'本科及以上',
            type:'bar',
            stack: 'sum',
            itemStyle: {
                normal: {
                    color: 'deepskyblue',
                    barBorderColor: 'tomato',
                    barBorderWidth: 6,
                    barBorderRadius:0,
                    label : {
                        show: true, 
                        position: 'top',
                        formatter: function (params) {

                                for (var i = 0, l = option5.xAxis[0].data.length; i < l; i++) {
                                if (option5.xAxis[0].data[i] == params.name) {
                                    return option5.series[0].data[i] + params.value;
                                }
                            }
                        },
                        textStyle: {
                            color: 'tomato'
                        }
                    }
                }
            },
            data:[22335002, 7452650, 4829020]
        }
    ]
};
myChart5.setOption(option5, true);
});
		
		            

	
				
			