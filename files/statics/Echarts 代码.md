银发人群上网的主要目的

```javascript
import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  series: [
    {
      type: 'treemap',
      data: [
        {
          name: '社交聊天',
          value: 67
        },
        {
          name: '观看视频',
          value: 44
        },
        {
          name: '阅读新闻/文章',
          value: 41
        },
        {
          name: '上网购物',
          value: 30
        },
        {
          name: '唱歌听歌',
          value: 30
        },
        {
          name: '游戏休闲',
          value: 23
        }
      ]
    }
  ]
};

option && myChart.setOption(option);

option = {
  series: [
    {
      type: 'treemap',
      data: [
        {
          name: '社交聊天',
          value: 67,
        },
        {
          name: '观看视频',
          value: 44,
        },
        {
          name: '阅读新闻/文章',
          value: 41,
        },
        {
          name: '上网购物',
          value: 30,
        },
        {
          name: '唱歌听歌',
          value: 30,
        },
        {
          name: '游戏休闲',
          value: 23,
        },
      ]
    }
  ]
};
```

老年人上网遇到的困难

```javascript
option = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [74.4, 55.9, '视力不好，眼睛容易累'],
      [50.1, 31.3, '手机上很多功能不会用'],
      [89.7, 19.6, '看不懂年轻人的话语/表情/图表的意思'],
      [68.1, 19, '不会打字、打字太慢'],
      [19.6, 17.7, '手机操作时不利索'],
      [10.6, 10.7, '不知道怎么搜索下载APP'],
      [32.7, 8.4, '不会查资料']
      
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'amount' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#65B581', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    }
  ]
};
```



中老年网民遭遇的四大上网风险

```javascript
option = {
  title: {
    text: '中老年网民遭遇的四大上网风险',
    subtext: '单位:%',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '70%',
      data: [
        { value: 66.2, name: '网络谣言' },
        { value: 52.7, name: '虚假广告' },
        { value: 37.4, name: '网络诈骗' },
        { value: 29.4, name: '低俗色情' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
```

互联网对银发人群在健康领域的价值

```javascript
option = {
   title: {
    text: 'Weather Statistics',
    subtext: 'Fake Data',
    left: 'center'
  },
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [74.4, 58, '更容易获得健康类知识'],
      [50.1, 36, '更便于和朋友交流健康信息'],
      [89.7, 34, '更快速的了解最新的健康类产品'],
      [68.1, 39, '和医生沟通更方便'],
      [19.6, 22, '帮我识别虚假信息和产品'],
      [10.6, 14, '通过网络挂号付费更快捷']
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'amount' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#65B581', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    }
  ]
};
```

受骗老年人经济自主性情况

```javascript
option = {
  title: {
    text: 'Weather Statistics',
    subtext: 'Fake Data',
    left: 'center'
  },
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 37.5, name: '共同协商决定' },
        { value: 41.1, name: '自己决定' },
        { value: 16, name: '配偶决定' },
        { value: 5.4, name: '子女决定' }
      ]
    }
  ]
};
```

受骗老年人收入情况

```javascript
option = {
  title: {
    text: 'Weather Statistics',
    subtext: 'Fake Data',
    left: 'center'
  },
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 67.1, name: '中等收入' },
        { value: 24.3, name: '高收入' },
         { value: 8.6, name: '低收入 ' }
      ]
    }
  ]
};
```

受骗老年人受教育情况

```javas
option = {
  title: {
    text: 'Weather Statistics',
    subtext: 'Fake Data',
    left: 'center'
  },
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 37.7, name: '高中 ' },
        { value: 12.3, name: '小学' },
        { value: 39.4, name: '初中' },
        { value: 10.6, name: '其他 ' },
      ]
    }
  ]
};
```

2010至2020我国老年人口数及占总人口比例的变化

```javascript
option = {
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
```

2016年至2021年互联网网民数量及普及率

```

```

2016年至2021年网民年龄结构变化

银发人群了解健康信息的途径

老年群体上网能力等级分布

银发人群活跃的APP类型

适老化政策点赞主体分布

第七次全国人口普查老年人口占比

微博评论采集结果

政策评论采集结果