import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar3D = ({ data }) => {
  const chartConfigs = {
    type: 'bar3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Forked',
        yAxisName: 'Forks',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default React.memo(Bar3D);
