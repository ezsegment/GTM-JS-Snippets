select
  event_date,
  count (distinct user_pseudo_id) as users
from 
  `your-project-name.analytics_999999999.events_*`
where
  _table_suffix between '20230801' and '20230807'
group by
  1
order by
  event_date asc
