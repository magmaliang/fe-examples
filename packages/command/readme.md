
## summary

这个仓库主要演示了如何定义一个 `npm srcipts` 可用的command.

## dependence

- commander


## how to use

```
npm install command-demo
```

在 npm script字段中配置：
```
"start": "my_cmd -h"
```

执行 `npm start` 即可看到控制台输出的命令效果
