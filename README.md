# How to install

```
$ npm install vaddy-scanner
```

# How to use

## use config file

**config template**
```
user='vaddy user id'
key='vaddy api key'
projectId='vaddy project id'
crawlId='crawl id'
```

**Specify and execute the configuration file**
```
$ vaddy-scan -f config.yaml
```

## use command line option

**options**

| option | shorthand option | description |
| :-: | :-: | :-: |
| --user | -u | vaddy user id |
| --apikey | -k | vaddy user api key |
| --projectid | -p | scanning project id |
| --crawlid | -c | scanning crawl id |

**Execute the command with arguments**

```
$ vaddy-scan -u '{userid}' -k '{apiKey}' -p '{projectid}' -c 'crawlid'
```