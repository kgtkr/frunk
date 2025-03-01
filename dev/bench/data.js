window.BENCHMARK_DATA = {
  "lastUpdate": 1740807014802,
  "repoUrl": "https://github.com/kgtkr/frunk",
  "entries": {
    "Frunk Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "lloydmeta@users.noreply.github.com",
            "name": "Lloyd",
            "username": "lloydmeta"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffba8cfa144b8ed02942271a3ea45006100cd029",
          "message": "Add a test to check that LabelledGeneric works with keyword fields (#238)\n\nChecks that derives works and transmogrifying works.\r\n\r\nSigned-off-by: lloydmeta <lloydmeta@gmail.com>",
          "timestamp": "2024-11-09T23:27:46+09:00",
          "tree_id": "0eb4ae4948dab78157d4d055240c6f49b1fd05db",
          "url": "https://github.com/kgtkr/frunk/commit/ffba8cfa144b8ed02942271a3ea45006100cd029"
        },
        "date": 1740807013196,
        "tool": "cargo",
        "benches": [
          {
            "name": "empty",
            "value": 0.31,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "generic_conversion",
            "value": 0.78,
            "range": "± 0.05",
            "unit": "ns/iter"
          },
          {
            "name": "creating_hlist",
            "value": 1.55,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "creating_tuple2",
            "value": 1.55,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_append",
            "value": 2.49,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_hlist_pat_match",
            "value": 1.55,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2",
            "value": 1.55,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2_match",
            "value": 1.55,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_consuming",
            "value": 1.55,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_non_consuming",
            "value": 1.55,
            "range": "± 0.02",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_24fields",
            "value": 59.34,
            "range": "± 0.99",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_25fields",
            "value": 74.19,
            "range": "± 0.86",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_24fields",
            "value": 2650.57,
            "range": "± 30.64",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_25fields",
            "value": 2610.38,
            "range": "± 35.00",
            "unit": "ns/iter"
          },
          {
            "name": "labelled_conversion",
            "value": 0.78,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "name",
            "value": 0.62,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "sculpted_conversion",
            "value": 0.78,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "combine_all_i32",
            "value": 13.06,
            "range": "± 0.06",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_all_i32",
            "value": 2.36,
            "range": "± 0.08",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_mut",
            "value": 0.31,
            "range": "± 0.01",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_ref",
            "value": 0.31,
            "range": "± 0.00",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_value",
            "value": 0.31,
            "range": "± 0.05",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_mut",
            "value": 0.31,
            "range": "± 0.00",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_ref",
            "value": 0.33,
            "range": "± 0.02",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_value",
            "value": 0.31,
            "range": "± 0.00",
            "unit": "ns/iter"
          },
          {
            "name": "combine_i32",
            "value": 1.55,
            "range": "± 0.02",
            "unit": "ns/iter"
          },
          {
            "name": "combine_option_string",
            "value": 31.71,
            "range": "± 0.40",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_i32",
            "value": 0.31,
            "range": "± 0.00",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_option_string",
            "value": 51.8,
            "range": "± 0.61",
            "unit": "ns/iter"
          },
          {
            "name": "manual_deep_from",
            "value": 590.4,
            "range": "± 12.22",
            "unit": "ns/iter"
          },
          {
            "name": "transmogrify_deep",
            "value": 429.87,
            "range": "± 4.98",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_bad",
            "value": 222.32,
            "range": "± 4.49",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_good",
            "value": 34.87,
            "range": "± 2.39",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_mixed",
            "value": 101.29,
            "range": "± 1.07",
            "unit": "ns/iter"
          },
          {
            "name": "adding_validateds",
            "value": 27.97,
            "range": "± 0.14",
            "unit": "ns/iter"
          },
          {
            "name": "error_result_into_validated",
            "value": 29.19,
            "range": "± 0.24",
            "unit": "ns/iter"
          },
          {
            "name": "ok_result_into_validated",
            "value": 1.24,
            "range": "± 0.02",
            "unit": "ns/iter"
          },
          {
            "name": "validated_to_result",
            "value": 1.24,
            "range": "± 0.02",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}