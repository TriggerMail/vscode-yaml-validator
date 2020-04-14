'hello world!';

let str = '/Users/jasonhang/bcroot/partner_repos/servermonkey/chrono.yaml';
let split = str.split('/');
let namespaceIdx = split.length - 2;
console.log('namespace:', split[namespaceIdx]);

let qs =
    'yumli_file=command_execution%3A+%5B%5D%0Adata_sync%3A%0A-%20name%3A%20jcrew_us_rrid_mapping_job%0A%20%20pipeline%3A%0A%20%20-%20ftp_get%3A%0A%20%20%20%20%20%20dirname%3A%20jcrew_us%2Fjcrew_to_bluecore%0A%20%20%20%20%20%20glob%3A%20jcrew_riid_mapping_*.csv%0A%20%20%20%20%20%20username%3A%20chronometer%0A%20%20%20%20idx%3A%200%0A%20%20-%20idx%3A%201%0A%20%20%20%20mapper%3A%0A%20%20%20%20%20%20field_def_file%3A%20rrid_opaque_id_feed.yaml%0A%20%20%20%20%20%20handler_spec%3A%20engine.chrono.jobs.chrono_event_feed_mapper%0A%20%20%20%20%20%20input_reader_spec%3A%20mapreduce.input_readers.GoogleCloudStorageLineInputReader%0A%20%20%20%20%20%20job_name%3A%20jcrew_us_rrid_mapping_job%0A%20%20schedule%3A%20every%20day%209%3A00%0A%20%20timezone%3A%20US%2FEastern%0A-%20name%3A%20optin_get%0A%20%20pipelin';

console.log(qs);
