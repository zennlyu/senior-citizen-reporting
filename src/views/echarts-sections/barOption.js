//柱状图配置
const barOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['Idontknow','比例']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Idontknow',
            min: 0,
            max: 3,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '比例',
            min: 0,
            max: 0.2,
            interval: 0.05,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: 'Idontknow',
            type: 'bar',
            data:
                [1.1934, 1.2277, 1.2776, 1.3262, 1.3902, 1.4524, 1.5037, 1.5961, 1.6724, 1.7767, 1.9059]
        },
        {
            name: '比例',
            type: 'line',
            yAxisIndex: 1,
            data:
                [0.089, 0.091, 0.094, 0.097, 0.101, 0.105, 0.108, 0.114, 0.119, 0.126, 0.135],
        }
    ]
};

export default barOption;
